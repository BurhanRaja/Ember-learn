import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | super rental', function (hooks) {
  setupApplicationTest(hooks);

  // Home Page Testing
  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    assert.dom('.container a.button').hasText('About Us');
    await click('.container a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  // About Page Testing
  test('visiting /about', async (assert) => {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.container a.button').hasText('Contact Us');
    await click('.container a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  // Contact Page Testing
  test('visiting /getting-in-touch', async (assert) => {
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo .address .phonenumber').hasText('+1 (503) 555-1212');
    assert.dom('.jumbo .address .email').hasText('superrentalsrep@emberjs.com');
  });

  // Navbar Testing
  test('visiting /', async (assert) => {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    assert.dom('nav').exists();
    assert.dom('nav .nav-index').hasText('SuperRentals');
    assert.dom('nav .nav-about').hasText('About');
    assert.dom('nav .nav-contact').hasText('Contact Us');

    await click('nav .nav-about');
    assert.strictEqual(currentURL(), '/about');

    await click('nav .nav-contact');
    assert.strictEqual(currentURL(), '/getting-in-touch');

    await click('nav .nav-index');
    assert.strictEqual(currentURL(), '/');
  });
});
