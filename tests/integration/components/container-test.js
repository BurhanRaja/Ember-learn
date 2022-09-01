import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Container>
        Hello World!
      </Container>
    `);

    assert.dom('.container').exists();
    assert.dom('.container').hasText('Hello World!');
  });
});
