/* eslint-disable no-console */
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export const analyzeReviews = async (reviews: string[]) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-001',

      prompt: `Analyze this text ${reviews} and identify tone of the review and the main keywords in it`,
      max_tokens: 100,
      n: 1,
    });
    console.log(completion.data.choices[0]);
    return completion.data.choices[0].text;
    // const keywords = completion.data.choices[0]
    //   .text!.split(':')[1]
    //   .trim()
    //   .split(',');
    // const tone = completion.data.choices[0].text!.split(':')[2].trim();

    // // Return the analysis results
    // return { keywords, tone };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      return error.message;
    }
  }
};
