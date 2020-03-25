module.exports = {
  succeed,
  fail,
  repair,
  get,
};

/* item = {
  name: "Big Sword",
  enhancement: 20,
  durability: 100
}  */

function succeed(item) {

  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return { ...item };
  };
}

function fail(item) {

  if (item.enhancement < 15) {
    return { ...item, enhancement: item.enhancement - 5 };
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    return { ...item, enhancement: item.enhancement - 10 };
  } else if (item.enhancement < 16) {
    return { ...item, enhancement: item.enhancement - 1 };
  } else {
    return { ...item };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
