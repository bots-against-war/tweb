/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import type ChatInput from './input';
import DropdownHover from '../../helpers/dropdownHover';
import {KeyboardButton, ReplyMarkup} from '../../layer';
import rootScope from '../../lib/rootScope';
import ListenerSetter, {Listener} from '../../helpers/listenerSetter';
import findUpClassName from '../../helpers/dom/findUpClassName';
import IS_TOUCH_SUPPORTED from '../../environment/touchSupport';
import findUpAsChild from '../../helpers/dom/findUpAsChild';
import cancelEvent from '../../helpers/dom/cancelEvent';
import {getHeavyAnimationPromise} from '../../hooks/useHeavyAnimationCheck';
import confirmationPopup from '../confirmationPopup';
import safeAssign from '../../helpers/object/safeAssign';
import setInnerHTML from '../../helpers/dom/setInnerHTML';
import wrapEmojiText from '../../lib/richTextProcessor/wrapEmojiText';
import {AppManagers} from '../../lib/appManagers/managers';
import {attachClickEvent} from '../../helpers/dom/clickEvent';
import Scrollable from '../scrollable';

export default class ReplyKeyboard extends DropdownHover {
  private static BASE_CLASS = 'reply-keyboard';
  private appendTo: HTMLElement;
  private listenerSetter: ListenerSetter;
  private managers: AppManagers;
  private btnHover: HTMLElement;
  private peerId: PeerId;
  private touchListener: Listener;
  private chatInput: ChatInput;
  private scrollable: Scrollable;

  constructor(options: {
    listenerSetter: ListenerSetter,
    managers: AppManagers,
    appendTo: HTMLElement,
    btnHover: HTMLElement,
    chatInput: ChatInput
  }) {
    super({
      element: document.createElement('div')
    });

    safeAssign(this, options);

    this.element.classList.add(ReplyKeyboard.BASE_CLASS);
    this.element.style.display = 'none';

    this.scrollable = new Scrollable();
    this.element.append(this.scrollable.container);

    this.attachButtonListener(this.btnHover, this.listenerSetter);
    this.listenerSetter.add(rootScope)('history_reply_markup', async({peerId}) => {
      if(this.peerId === peerId) {
        if(this.checkAvailability() && this.isActive()) {
          await this.render();
        }

        getHeavyAnimationPromise().then(() => {
          this.checkForceReply();
        });
      }
    });
  }

  public init() {
    this.appendTo.append(this.element);

    this.listenerSetter.add(this)('open', async() => {
      await this.render();

      if(IS_TOUCH_SUPPORTED) {
        this.touchListener = this.listenerSetter.add(document.body)('touchstart', this.onBodyTouchStart, {passive: false, capture: true}) as any as Listener;
        this.listenerSetter.add(this)('close', () => {
          this.listenerSetter.remove(this.touchListener);
        }, {once: true});
      }
    });

    attachClickEvent(this.element, (e) => {
      const target = findUpClassName(e.target, 'btn');
      if(!target) {
        return;
      }

      const type = target.dataset.type as KeyboardButton['_'];
      const {peerId} = this;
      switch(type) {
        case 'keyboardButtonRequestPhone': {
          confirmationPopup({
            titleLangKey: 'ShareYouPhoneNumberTitle',
            button: {
              langKey: 'OK'
            },
            descriptionLangKey: 'AreYouSureShareMyContactInfoBot'
          }).then(() => {
            this.managers.appMessagesManager.sendContact(peerId, rootScope.myId);
          });
          break;
        }

        default: {
          this.managers.appMessagesManager.sendText(peerId, target.dataset.text);
          break;
        }
      }

      this.toggle(false);
    }, {listenerSetter: this.listenerSetter});

    return super.init();
  }

  private onBodyTouchStart = (e: TouchEvent) => {
    const target = e.touches[0].target as HTMLElement;
    if(!findUpAsChild(target, this.element) && target !== this.btnHover) {
      cancelEvent(e);
      this.toggle(false);
    }
  };

  public async checkForceReply() {
    const replyMarkup = await this.getReplyMarkup();
    if(replyMarkup._ === 'replyKeyboardForceReply' &&
      !replyMarkup.pFlags.hidden &&
      !replyMarkup.pFlags.used) {
      replyMarkup.pFlags.used = true;
      this.chatInput.initMessageReply(replyMarkup.mid);
    }
  }

  private async getReplyMarkup() {
    return (await this.managers.appMessagesManager.getHistoryStorageTransferable(this.peerId)).replyMarkup ?? {
      _: 'replyKeyboardHide'
    };
  }

  public async render(replyMarkup?: ReplyMarkup.replyKeyboardMarkup) {
    if(replyMarkup === undefined) {
      replyMarkup = await this.getReplyMarkup() as any;
    }

    this.scrollable.container.replaceChildren();

    for(const row of replyMarkup.rows) {
      const div = document.createElement('div');
      div.classList.add(ReplyKeyboard.BASE_CLASS + '-row');

      for(const button of row.buttons) {
        const btn = document.createElement('button');
        btn.classList.add(ReplyKeyboard.BASE_CLASS + '-button', 'btn');
        setInnerHTML(btn, wrapEmojiText(button.text));
        btn.dataset.text = button.text;
        btn.dataset.type = button._;
        div.append(btn);
      }

      this.scrollable.container.append(div);
    }
  }

  public async checkAvailability(replyMarkup?: ReplyMarkup) {
    if(replyMarkup === undefined) {
      replyMarkup = await this.getReplyMarkup();
    }

    const hide = replyMarkup._ === 'replyKeyboardHide' || !(replyMarkup as ReplyMarkup.replyInlineMarkup).rows?.length;
    this.btnHover.classList.toggle('hide', hide);

    if(hide) {
      this.toggle(false);
    }

    return !hide;
  }

  public setPeer(peerId: PeerId) {
    this.peerId = peerId;

    this.checkAvailability();
    this.checkForceReply();
  }
}
