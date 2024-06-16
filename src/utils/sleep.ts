// export default function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const sleep = async () => {
  console.log("Start");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("End");
  return 20;
};

export default sleep;
