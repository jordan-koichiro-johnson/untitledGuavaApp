import openai
from api_secrets import API_KEY

openai.api_key = API_KEY

prompt = "say this is test"

response = openai.Completion.create(engine="text-davinci-001", prompt=prompt, max_token = 6)

print(response)