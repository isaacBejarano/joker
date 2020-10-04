class Joke {
	private static readonly list: Joke[] = [];

	constructor(
		// prettier-ignore
		private readonly id: number,
		private readonly joke: string
	) {
		Joke.list.push(this);
	}

	// getters
	get getJoke() {
		return this.joke;
	}

	static get getList() {
		return Joke.list;
	}
}
