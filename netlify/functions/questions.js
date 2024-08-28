import questions from "../../src/data/questions.json";

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(questions),
  };
}
