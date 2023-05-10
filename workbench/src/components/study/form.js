function FormInput() {

    return (
        <>
            <div className="form-body">
                <h1 id="title">freeCodeCamp Survey Form</h1>
                <p id="description">Thank you for taking the time to help us improve the platform</p>
                <form id="survey-form">
                    <label for="name" id="name-label">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required></input>
                    <label for="email" id="email-label">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
                    <label for="number" id="number-label">Age (optional)</label>
                        <input type="number" id="number" name="number" placeholder="Enter your age" min="18" max="100"></input>
                    <label for="dropdown">Which option best describes your current role?</label>
                        <select id="dropdown" name="dropdown">
                            <option value="">Select current role</option>
                            <option value="1">Student</option>
                            <option value="2">Full time job</option>
                            <option value="3">Full time learner</option>
                            <option value="4">Prefer not to say</option>
                            <option value="5">Other</option>
                        </select>
                    <label>Would you recommend freeCodeCamp to a friend?</label>
                        <input type="radio" name="radio" value="opcao1" required></input>Definitely
                        <input type="radio" name="radio" value="opcao2" required></input>Maybe
                        <input type="radio" name="radio" value="opcao2" required></input>Not sure
                    <label>What would you like to see improved? (Check all that apply)</label>
                        <input type="checkbox" name="checkbox1" value=""></input>Front-end Projects
                        <input type="checkbox" name="checkbox2" value="1"></input>Back-end Projects
                        <input type="checkbox" name="checkbox3" value="2"></input>Full-stack Projects
                    <label for="comments">Any comments or suggestions?</label>
                        <textarea id="comments" name="comments" placeholder="Enter your comment here..."></textarea>
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default FormInput;