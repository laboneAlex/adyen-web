import { Card } from './card';
import { Page } from '@playwright/test';
import { Address } from './address';

class CardWithAvs extends Card {
    readonly billingAddress: Address;

    constructor(page: Page) {
        super(page);
        this.billingAddress = new Address(page);
    }

    async fillInPostCode(postCode: string) {
        await this.billingAddress.fillInPostCode(postCode);
    }
}

export { CardWithAvs };
