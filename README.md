# Thera mental health bot
A mental health chatbot built with Chat-GPT API with customised training.
if you would like to learn how to train Chat GPT on your own data, please use this link 
[Train Chat-GPT](https://livechatai.com/blog/how-to-train-chatgpt-on-your-own-data).

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
