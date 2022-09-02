import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'emberlearn/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about rentals', async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom('article div').hasClass('rentals');
    assert.dom('article h5 strong').hasText('Grand Old Mansion');
    assert
      .dom(
        'article .rentals .row .col-md-8 .card-body .details .owner-location .owner'
      )
      .includesText('Veruca Salt');
    assert
      .dom(
        'article .rentals .row .col-md-8 .card-body .details .owner-location .location'
      )
      .includesText('San Francisco');
    assert
      .dom(
        'article .rentals .row .col-md-8 .card-body .details .type-bedrooms .type'
      )
      .includesText('Standalone');
    assert
      .dom(
        'article .rentals .row .col-md-8 .card-body .details .type-bedrooms .bedrooms'
      )
      .includesText('15');
  });
});
