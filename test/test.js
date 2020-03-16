/** Test calcAreaTriangle v.1
author: Pochivalin Alexey		
*/

QUnit.test("If side a > 0 && side b > 0 then area > 0", function(assert) {
  assert.equal(calcAreaTriangle(3, 2), 3, "area= 3 if side a = 3,side b = 2");
});

QUnit.test("If typeof side float then area is float", function(assert) {
  assert.equal(calcAreaTriangle(1.4, 2 / 5), 0.28);
});

QUnit.test("If side a < 0 || side b < 0 then area < 0", function(assert) {
  assert.equal(
    calcAreaTriangle(-3, 2),
    -3,
    "area= -3 if side a = -3,side b = 2"
  );
  assert.equal(
    calcAreaTriangle(3, -2),
    "-3",
    "area= -3 if side a = 3,side b = -2"
  );
});

QUnit.test("If side a === 0 || side b === 0 then area = 0", function(assert) {
  assert.equal(calcAreaTriangle(0, 2), 0, "area= 0 if side a = 0,side b = 2");
  assert.equal(calcAreaTriangle(3, 0), 0, "area= 0 if side a = 3,side b = 0");
});

QUnit.test("If side a === null || side b === null then area = 0", function(
  assert
) {
  assert.equal(
    calcAreaTriangle(null, null),
    0,
    "area= 0 if side a = null,side b = null"
  );
});

QUnit.test("If side a === '' || side b === '' then area = 0", function(assert) {
  assert.equal(
    calcAreaTriangle("", ""),
    0,
    "area= 0 if side a = '',side b = ''"
  );
});

QUnit.test(
  "If side a === [a-zA-Z] || side b === [a-zA-Z] then area = NaN",
  function(assert) {
    assert.equal(
      isNaN(calcAreaTriangle("a", 2 / 5)),
      true,
      "area= NaN if side a = 'a',side b = 2/5"
    );
  }
);

QUnit.test("Примеры расчета площади", function(assert) {
  function makeTest(a, b) {
    const area = (a * b) / 2;
    assert.equal(
      calcAreaTriangle(a, b),
      area,
      "area= " + area + " if side a = " + a + ",side b = " + b
    );
  }

  for (let x = 1; x <= 5; x++) {
    const side_a = 30 * x;
    const side_b = 30 * x;

    makeTest(side_a, side_b);
  }
});
