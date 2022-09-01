import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | super rental', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    assert.dom('h1').hasText('Welcome to Super Rentals!');

    assert.dom('.container a.button').hasText('About Us');
    await click('.container a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async (assert) => {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');

    assert.dom('h1').hasText('About Super Rentals');

    assert.dom('.container a.button').hasText('Contact Us');
    await click('.container a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async (assert) => {
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch');

    assert.dom('h1').hasText('Contact Us');

    assert.dom('.jumbo .address .phonenumber').hasText('+1 (503) 555-1212');
    assert.dom('.jumbo .address .email').hasText('superrentalsrep@emberjs.com');
  });
});
