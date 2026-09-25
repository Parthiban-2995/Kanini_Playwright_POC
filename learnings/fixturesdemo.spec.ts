import { expect } from '@playwright/test'
import { customtest } from './fixtures'


customtest('creating login fixture', async ({ authenticationPage , createOrder }) => {

	await expect(authenticationPage).toHaveTitle('Dashboard · Smart Hospital')
}

)