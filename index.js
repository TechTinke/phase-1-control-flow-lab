function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2500) {
    return "No can do.";
  } else if (distance > 2000) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "That will be twenty bucks.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC"
    ? "Ok, sounds good."
    : city === "Pittsburgh"
    ? "No go."
    : "Yes, we can do that.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
