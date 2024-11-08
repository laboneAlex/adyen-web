import { test } from '@playwright/test';

// selectors:
const dualBrandingIconHolder = '.card-field .adyen-checkout__card__dual-branding__buttons';
const dualBrandingIconHolderActive = '.card-field .adyen-checkout__card__dual-branding__buttons--active';
const NOT_SELECTED_CLASS = 'adyen-checkout__card__cardNumber__brandIcon--not-selected';

// @ts-ignore
const getPropFromPMData = prop => window.card.formatData().paymentMethod[prop];

test.describe('Testing dual branding', () => {
    // use config:
    // window.cardConfig = {
    //   type: 'scheme',
    //   brands: ['mc', 'visa', 'amex', 'cartebancaire', 'star']
    // };
    //
    // window.dropinConfig = {
    //   showStoredPaymentMethods: false, // hide stored PMs so credit card is first on list
    //   paymentMethodsConfiguration: {
    //     card: { brands: ['mc', 'amex', 'visa', 'cartebancaire', 'star'], _disableClickToPay: true }
    //   }
    // };
    //
    // window.mainConfiguration = {
    //   removePaymentMethods: ['paywithgoogle', 'applepay', 'clicktopay']
    // };

    test(
        '#1 Fill in card number that will get dual branding result from binLookup, ' + 'then check that the expected icons/buttons are shown',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD)
            // Expect the logo, with the correct order
            // expect(dualBrandingIconHolderActive.exists)
            // expect(dualBrandingIconHolderActive.find('img').nth(0).getAttribute('data-value')).eql('visa')
            // expect(dualBrandingIconHolderActive.find('img').nth(1).getAttribute('data-value')).eql('cartebancaire');
        }
    );

    test(
        '#2 Fill in card number that will get dual branding result from binLookup, ' +
            'then complete card without selecting dual brand,' +
            'then check it is valid,' +
            'then check PM data does not have a brand property',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD);
            // Fill date and cvc: cardUtils.fillDateAndCVC(t);
            // Expect card to now be valid: t.expect(getIsValid()).eql(true);
            // Should not be a brand property in the PM data: t.expect(getPropFromPMData('brand')).eql(undefined);
        }
    );

    test(
        '#3 Fill in card number that will get dual branding result from binLookup, ' +
            'then complete card,' +
            'then check it is valid,' +
            'then select the dual brands,' +
            'then check PM data does have a corresponding brand property',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD);
            // Fill date and cvc cardUtils.fillDateAndCVC(t);
            // Expect card to now be valid: t.expect(getIsValid()).eql(true);
            // Click brand icon: click(dualBrandingIconHolderActive.find('img').nth(1))
            // Expect brand value: expect(getPropFromPMData('brand')).eql('cartebancaire')
            // Click brand icon: click(dualBrandingIconHolderActive.find('img').nth(0))
            // Expect brand value: expect(getPropFromPMData('brand')).eql('visa')
        }
    );

    test(
        '#4 Fill in partial card number that will get dual branding result from binLookup, ' +
            'then check that the expected icons/buttons are shown but inactive,' +
            'then complete the number & check that the icons/buttons are active',
        async () => {
            // Start, allow time for iframes to load
            // const firstDigits = DUAL_BRANDED_CARD.substring(0, 11);
            // const lastDigits = DUAL_BRANDED_CARD.substring(11, 16);
            // Partially fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, firstDigits);
            // Expect dualBrandingIconHolder exists
            // Expect dualBrandingIconHolderActive exists
            // Complete field: cardUtils.fillCardNumber(t, lastDigits);
            // Expect expect(dualBrandingIconHolderActive.exists)
        }
    );

    test(
        '#5 Fill in card number that will get dual branding result from binLookup, ' +
            'then check that the icons/buttons are active,' +
            'then delete the number,' +
            'then check that the icons/buttons have gone',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD);
            // Expect dualBrandingIconHolder exists
            // Expect dualBrandingIconHolderActive exists
            // cardUtils.deleteCardNumber(t);
            // Expect dualBrandingIconHolder not exists
            // Expect dualBrandingIconHolderActive not exists
        }
    );

    test(
        '#6 Fill in card number that will get dual branding result from binLookup, ' +
            'then select one of the dual brands,' +
            'then check the other brand icon is at reduced alpha,' +
            'then repeat with the other icon',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD);
            // click first icon: click(dualBrandingIconHolderActive.find('img').nth(0))
            // first icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // second icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS))
            // click second icon: click(dualBrandingIconHolderActive.find('img').nth(1))
            // second icon SHOULDN'T have the "not selected" class expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // first icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS))
        }
    );

    test(
        '#7 Fill in card number that will get single branding result from binLookup, ' +
            'then enter a dual branded card number,' +
            'check both brand icons are at full alpha,' +
            'then click icons and make sure they go to the expected alpha',
        async () => {
            // Start, allow time for iframes to load
            // cardUtils.fillCardNumber(t, REGULAR_TEST_CARD);
            // Paste dual branded card (visa/cb) into card field: cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD, 'paste');
            // Expect buttons are active: t.expect(dualBrandingIconHolderActive.exists).ok();
            // first icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // second icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(false);
            // click first icon: click(dualBrandingIconHolderActive.find('img').nth(0))
            // first icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // second icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(true)
            // click second icon: click(dualBrandingIconHolderActive.find('img').nth(1))
            // second icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // first icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(true);
        }
    );

    test(
        '#8 Fill in card number that will get single branding result from binLookup, ' +
            'then enter a partial dual branded card number,' +
            'check both brand icons are at reduced alpha,' +
            'complete card number,' +
            'check both brand icons are at full alpha,' +
            'then click icons and make sure they go to the expected alpha',
        async () => {
            // Start, allow time for iframes to load
            // cardUtils.fillCardNumber(t, REGULAR_TEST_CARD);
            // firstDigits = DUAL_BRANDED_CARD.substring(0, 11);
            // lastDigits = DUAL_BRANDED_CARD.substring(11, 16);
            // Paste partial dual branded card (visa/cb) into card field: cardUtils.fillCardNumber(t, firstDigits, 'paste');
            // Check buttons are present but NOT active (which will mean the holding element is at 25% opacity): expect(dualBrandingIconHolder.exists).ok().expect(dualBrandingIconHolderActive.exists).notOk();
            // Complete field: cardUtils.fillCardNumber(t, lastDigits);
            // Check buttons are active: t.expect(dualBrandingIconHolderActive.exists).ok();
            // Check icon opacities (should be 100%)
            // first icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // second icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(false);
            // Click brand icons
            // click first icon: click(dualBrandingIconHolderActive.find('img').nth(0))
            // first icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // second icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(true)
            // click second icon: click(dualBrandingIconHolderActive.find('img').nth(1))
            // second icon SHOULDN'T have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(1).hasClass(NOT_SELECTED_CLASS)).eql(false)
            // first icon SHOULD have the "not selected" class: expect(dualBrandingIconHolderActive.find('img').nth(0).hasClass(NOT_SELECTED_CLASS)).eql(true);
        }
    );

    test(
        '#9 Fill in card number that will get dual branding result from binLookup, ' +
            'but one of the brands should be excluded from the UI, ' +
            '(but meaning also that no brand should be set in the PM data), ' +
            'then check it is valid,' +
            'then check PM data does not have a brand property,' +
            'and check there are no dual branding icons/buttons',
        async () => {
            // Start, allow time for iframes to load
            // Fill card field with dual branded card (visa/cb): cardUtils.fillCardNumber(t, DUAL_BRANDED_CARD_EXCLUDED);
            // Fill in data and cvc: cardUtils.fillDateAndCVC(t);
            // Expect card to now be valid: expect(getIsValid()).eql(true);
            // Should not be a brand property in the PM data: t.expect(getPropFromPMData('brand')).eql(undefined);
            // Should be no dual branding icons/buttons: expect(dualBrandingIconHolder.exists).notOk().expect(dualBrandingIconHolderActive.exists).notOk();
        }
    );
});
