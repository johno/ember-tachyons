import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t-header', 'Integration | Component | t header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#t-header}}
      template block text
    {{/t-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
