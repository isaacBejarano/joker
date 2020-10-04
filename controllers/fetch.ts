$(() => {
	// fetch API
	$("form").submit(e => {
		e.preventDefault();

		// AJAX
		$.ajax({
			type: "GET",
			url: "http://api.icndb.com/jokes/random",
			// data: "data",
			dataType: "json",
			success: res => {
				// 1. LOADING...

				// progress bar animation
				$("#fetch-progress .progress-bar").addClass("progress-bar-animated");

				// progress bar color
				$("#fetch-progress .progress-bar").addClass("bg-info");
				$("#fetch-progress .progress-bar").removeClass("bg-success");

				// progress bar width
				$("#fetch-progress .progress-bar").removeClass("download-100");
				$("#fetch-progress .progress-bar").removeClass("download-75");
				$("#fetch-progress .progress-bar").removeClass("download-25");
				$("#fetch-progress .progress-bar").removeClass("download-10");

				// alerts
				$(".alert-info").removeClass("d-none");
				$(".alert-success").addClass("d-none");

				// data toString
				$("#outlet p").html("Why so seriuous?"); // clear outlet

				setTimeout(() => $("#fetch-progress .progress-bar").addClass("download-10"), 800);
				setTimeout(() => $("#fetch-progress .progress-bar").addClass("download-25"), 1000);
				setTimeout(() => $("#fetch-progress .progress-bar").addClass("download-75"), 2500);

				// 2. LOADED!

				setTimeout(() => {
					// progress bar aniation
					$("#fetch-progress .progress-bar").removeClass("progress-bar-animated");

					// progress bar color
					$("#fetch-progress .progress-bar").removeClass("bg-info");
					$("#fetch-progress .progress-bar").addClass("bg-success");

					// progress bar width
					$("#fetch-progress .progress-bar").addClass("download-100");

					// alerts
					$(".alert-info").addClass("d-none");
					$(".alert-success").removeClass("d-none");

					// data toString
					$("#outlet p").html(`${res.value.joke}`);
					$("#outlet p").focus()
				}, 3500);
			},
			error: (xhr, status, error) => {
				console.log(xhr);
				$(".alert-danger").removeClass("d-none");
				$(".msg").html(`
					Status: <i>${status}</i><br/>
					Error: <i>${error}</i>
				`);
			},
		});
	});
});
