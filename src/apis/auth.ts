import { MockList } from '../types'
import { authApi } from './instance'

export const auth = () => authApi.get<MockList>('/authmock')
