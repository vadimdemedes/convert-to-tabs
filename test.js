import test from 'ava';
import spacesToTabs from './';

const str = `
function someFunc() {
    if (a) {
        someOtherFunc();
    }
}
`.trim();

test('convert spaces to tabs', t => {
	t.is(spacesToTabs(str), [
		'function someFunc() {',
		'\t\tif (a) {',
		'\t\t\t\tsomeOtherFunc();',
		'\t\t}',
		'}'
	].join('\n'));
});

test('use custom amount of spaces', t => {
	t.is(spacesToTabs(str, 4), [
		'function someFunc() {',
		'\tif (a) {',
		'\t\tsomeOtherFunc();',
		'\t}',
		'}'
	].join('\n'));
});

test('convert only leading spaces', t => {
	t.is(spacesToTabs('  hello("  ")'), '\thello("  ")');
});
