export default function getExpiryDate() {
  let today = new Date();
  today.setFullYear(today.getFullYear() + 1);
  return today;
}
