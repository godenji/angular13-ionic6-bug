import { props } from './common'

const domain = 'app.benchboss.ai'
const host = `https://${domain}`
const url = `${host}/api`
const wss = `wss://${domain}`

export const environment = {
  production: true,
  host,
  url,
  wss,
  paymentToken: 'pk_live_dctVjGNiRz54scz5d6MFPwZS',
  ...props
}
