class Joke {
	private static readonly list: Joke[] = [];

	constructor(private readonly joke: string) {
		this.joke = joke;

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
