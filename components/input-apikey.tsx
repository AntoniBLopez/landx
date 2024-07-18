import { useState } from "react";

export function InputApiKey() {
	const [apiKey, setApiKey] = useState("");
	const [api, setApi] = useState("openai");

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(apiKey, api);
		await fetch("/api/api-key", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				apiKey,
				api,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

  return (
    <form
      onSubmit={onSubmit}
      className="relative max-w-xl mx-auto bg-white/40 dark:bg-zinc-800/40 h-[48px] rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 mt-5"
    >
      <input
        type="password"
        placeholder="User API Key"
        className="relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10"
        onChange={(e) => setApiKey(e.target.value)}
        value={apiKey}
      />

			<select
				name="api"
				id="api"
				className="relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 pr-1 mr-3"
				onChange={(e) => setApi(e.target.value)}
			>
				<option value="openai" className="bg-white/40 dark:bg-zinc-800">
					OpenAI
				</option>
				<option value="gpt3" className="bg-white/40 dark:bg-zinc-800">
					GPT-3
				</option>
			</select>
		</form>
	);
}
