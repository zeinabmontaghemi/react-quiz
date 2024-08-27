import questions from "../../src/data/questions.json";

export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(questions),
  };
}
