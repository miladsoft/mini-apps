import { ClickableComponent } from '../utils/clickable-component'
import { State } from '../utils/state'
import type { Context } from './_context'

export type BackButtonFlavor = {
  backButton: BackButton
}

export function installBackButton(ctx: Context<BackButtonFlavor>) {
  ctx.miniApp.backButton = new BackButton(ctx)
}

export type BackButtonState = {
  visible: boolean
}

class BackButton extends ClickableComponent {
  private state: State<BackButtonState>

  constructor(private ctx: Context) {
    super()

    this.ctx.eventManager.onEvent('back_button_pressed', () => {
      if (this.visible) {
        this.triggerOnClick()
      }
    })

    this.state = new State<BackButtonState>({
      storage: ctx.storage,
      key: 'BackButton',
      initial: () => ({
        visible: false,
      }),
      onBeforeChange: (newState) => {
        this.ctx.eventManager.postEvent('web_app_setup_back_button', {
          is_visible: newState.visible,
        })
      },
    })
  }

  public get visible(): boolean {
    return this.state.get('visible')
  }

  public set visible(value: boolean) {
    this.state.set('visible', value)
  }

  public hide() {
    this.visible = false
  }

  public show() {
    this.visible = true
  }
}
