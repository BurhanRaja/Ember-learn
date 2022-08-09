import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | super rental', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    assert.dom('h1').hasText('Welcome to Super Rentals!')

    assert.dom('.container a.button').hasText('About Us')
    await click('.container a.button')

    assert.strictEqual(currentURL(), '/about')
  });
});
