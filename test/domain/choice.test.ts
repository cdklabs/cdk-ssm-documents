import { strict as assert } from 'assert';
import { Choice, StringVariable, Operation, BooleanVariable, NumberVariable } from '../../lib';

describe('Choice', function() {
  describe('#evaluate()', function() {
    it('ENDS_WITH evaluates true when ends with', function() {
      const choice = new Choice({ operation: Operation.ENDS_WITH, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'foobar' });
      assert.equal(evaluation, true);
    });
    it('ENDS_WITH evaluates false when does not ends with', function() {
      const choice = new Choice({ operation: Operation.ENDS_WITH, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'foobar2' });
      assert.equal(evaluation, false);
    });
    it('CONTAINS evaluates true when contains', function() {
      const choice = new Choice({ operation: Operation.CONTAINS, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'foobar2' });
      assert.equal(evaluation, true);
    });
    it('CONTAINS evaluates false when does not contain', function() {
      const choice = new Choice({ operation: Operation.CONTAINS, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'fooba2r' });
      assert.equal(evaluation, false);
    });
    it('EQUALS_IGNORE_CASE evaluates true when equals', function() {
      const choice = new Choice({ operation: Operation.EQUALS_IGNORE_CASE, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'BaR' });
      assert.equal(evaluation, true);
    });
    it('EQUALS_IGNORE_CASE evaluates false when does not equal', function() {
      const choice = new Choice({ operation: Operation.EQUALS_IGNORE_CASE, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'foo' });
      assert.equal(evaluation, false);
    });
    it('STARTS_WITH evaluates true when starts with', function() {
      const choice = new Choice({ operation: Operation.STARTS_WITH, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'barfoo' });
      assert.equal(evaluation, true);
    });
    it('STARTS_WITH evaluates false when does not start with', function() {
      const choice = new Choice({ operation: Operation.STARTS_WITH, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'foobar' });
      assert.equal(evaluation, false);
    });
    it('STRING_EQUALS evaluates true when equals', function() {
      const choice = new Choice({ operation: Operation.STRING_EQUALS, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'bar' });
      assert.equal(evaluation, true);
    });
    it('STRING_EQUALS evaluates false when does not equal', function() {
      const choice = new Choice({ operation: Operation.STRING_EQUALS, constant: 'bar', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 'BAR' });
      assert.equal(evaluation, false);
    });
    it('BOOLEAN_EQUALS evaluates true when equals', function() {
      const choice = new Choice({ operation: Operation.BOOLEAN_EQUALS, constant: false, variable: new BooleanVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: false });
      assert.equal(evaluation, true);
    });
    it('BOOLEAN_EQUALS evaluates false when does not equal', function() {
      const choice = new Choice({ operation: Operation.BOOLEAN_EQUALS, constant: true, variable: new BooleanVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: false });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_EQUALS evaluates true when equals', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 4 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_EQUALS evaluates false when does not equal', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 5 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_GREATER evaluates true when greater', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 5 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_GREATER evaluates false when equal', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 4 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_GREATER evaluates false when less', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 3 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_LESSER evaluates true when greater', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 3 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_LESSER evaluates false when equal', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 4 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_LESSER evaluates false when less', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 5 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_GREATER_OR_EQUALS evaluates true when greater', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 5 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_GREATER_OR_EQUALS evaluates false when equal', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 4 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_GREATER_OR_EQUALS evaluates false when less', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 3 });
      assert.equal(evaluation, false);
    });
    it('NUMERIC_LESSER_OR_EQUALS evaluates true when greater', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 3 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_LESSER_OR_EQUALS evaluates false when equal', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 4 });
      assert.equal(evaluation, true);
    });
    it('NUMERIC_LESSER_OR_EQUALS evaluates false when less', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      const evaluation = choice.evaluate({ myKey: 5 });
      assert.equal(evaluation, false);
    });
  });

  describe('#asSsmEntry()', function() {
    it('Ssm representation contains all fields', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.deepEqual(choice.asSsmEntry(), {
        NextStep: 'aaa',
        NumericLesserOrEquals: 4,
        Variable: '{{myKey}}',
      });
    });
    it('NUMERIC_LESSER_OR_EQUALS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().NumericLesserOrEquals, 4);
    });
    it('NUMERIC_GREATER_OR_EQUALS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER_OR_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().NumericGreaterOrEquals, 4);
    });
    it('NUMERIC_GREATER prints name correctly', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_GREATER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().NumericGreater, 4);
    });
    it('NUMERIC_LESSER prints name correctly', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_LESSER, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().NumericLesser, 4);
    });
    it('NUMERIC_EQUALS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.NUMERIC_EQUALS, constant: 4, variable: new NumberVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().NumericEquals, 4);
    });
    it('BOOLEAN_EQUALS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.BOOLEAN_EQUALS, constant: true, variable: new BooleanVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().BooleanEquals, true);
    });
    it('CONTAINS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.CONTAINS, constant: 'a', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().Contains, 'a');
    });
    it('ENDS_WITH prints name correctly', function() {
      const choice = new Choice({ operation: Operation.ENDS_WITH, constant: 'a', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().EndsWith, 'a');
    });
    it('STARTS_WITH prints name correctly', function() {
      const choice = new Choice({ operation: Operation.STARTS_WITH, constant: 'a', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().StartsWith, 'a');
    });
    it('EQUALS_IGNORE_CASE prints name correctly', function() {
      const choice = new Choice({ operation: Operation.EQUALS_IGNORE_CASE, constant: 'a', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().EqualsIgnoreCase, 'a');
    });
    it('STRING_EQUALS prints name correctly', function() {
      const choice = new Choice({ operation: Operation.STRING_EQUALS, constant: 'a', variable: new StringVariable('myKey'), jumpToStepName: 'aaa' });
      assert.equal(choice.asSsmEntry().StringEquals, 'a');
    });
  });
});
