export const randomChar = () => {
  const str = "qwertyuiopasdfghjkllmnbvcxz";

  return str[Math.floor(Math.random) * str.length];
};
