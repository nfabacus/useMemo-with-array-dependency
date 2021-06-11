## useMemo can take an array as a dependency??

It depends, if the array points to the same array instance, YES.

But, if the array is created every time the component is rendered, NO - in which case useMemo is not only useless but could cause performance issue.

Example

```
The 'arr' array makes the dependencies of useMemo Hook (at line 37) change on every render. Move it inside the useMemo callback. Alternatively, wrap the initialization of 'arr' in its own useMemo() Hook. (react-hooks/exhaustive-deps)
```
