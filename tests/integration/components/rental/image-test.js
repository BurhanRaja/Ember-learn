import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders rental images', async function (assert) {

    // Template block usage:
    await render(hbs`
      <Rental::Image
      src="../assets/images/grand-mansion.jpg"
      alt="Mansion"
      />
    `);

    assert.dom('.image img').exists().hasAttribute('src', '../assets/images/grand-mansion.jpg').hasAttribute('alt', 'Mansion')
  });
});
