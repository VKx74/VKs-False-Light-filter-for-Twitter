// Log that the content script is running
console.log("AK/VK Filter script is running.");

// Store the state of the cooldown globally
let cooldownActive = false;

// Function to remove blur from all posts
function removeBlurFromAllPosts() {
  const allPosts = document.querySelectorAll('.blur-box');
  allPosts.forEach((blurBox, index) => {
    blurBox.style.display = 'none'; // Remove blur for all posts
    console.log(`Veil removed from post #${index + 1}`);
  });
}

// Function to restore blur on all posts
function restoreBlurToAllPosts() {
  const allPosts = document.querySelectorAll('.blur-box');
  allPosts.forEach((blurBox, index) => {
    blurBox.style.display = 'block'; // Re-apply blur for all posts
    console.log(`Veil restored to post #${index + 1}`);
  });
}

// Function to disable all buttons
function disableAllButtons(buttonText) {
  const allButtons = document.querySelectorAll('.demo-button');
  allButtons.forEach((button) => {
    button.disabled = true;
    button.innerText = buttonText || 'LUCIFERS FALSE LIGHT ARE NOW ENTERING YOUR MIND.';
  });
}

// Function to enable all buttons
function enableAllButtons() {
  const allButtons = document.querySelectorAll('.demo-button');
  allButtons.forEach((button) => {
    button.disabled = false;
    button.innerText = 'Expose me to DEATH for 17 seconds.';
  });
}

// Function to show countdown for the 17-second exposure
function startExposureCountdown(button) {
  let secondsLeft = 17;
  
  const countdownInterval = setInterval(() => {
    if (secondsLeft > 0) {
      button.innerText = `Exposed to death for another ${secondsLeft} seconds...`;
      secondsLeft--;
    } else {
      clearInterval(countdownInterval);
      restoreBlurToAllPosts();
      console.log('Safety restored after 17 seconds.');
    }
  }, 1000);
}

// Function to show countdown for the 17-minute cooldown
function startCooldownCountdown() {
  let minutesLeft = 17;
  
  const cooldownInterval = setInterval(() => {
    if (minutesLeft > 0) {
      disableAllButtons(`Cooldown: ${minutesLeft} minute(s) left`);
      minutesLeft--;
    } else {
      clearInterval(cooldownInterval);
      enableAllButtons();
      cooldownActive = false;
      console.log('VK/AK Cooldown ended, buttons re-enabled.');
    }
  }, 60 * 1000);
}

// Function to inject "DEMO" boxes into posts
function injectDemoBoxes() {
  try {
    // Select all posts (modify selector as needed to match the structure of X posts)
    const posts = document.querySelectorAll('article');

    // Log how many posts were found
    console.log(`Found ${posts.length} posts.`);

    // Loop through all posts and check if they already have the "DEMO" box
    posts.forEach((post, index) => {
      // Only add the "DEMO" box if it doesn't already exist
      if (!post.querySelector('.demo-container')) {
      

        // Create container div
        const container = document.createElement('div');
        container.className = 'demo-container';

        // Create blur effect background
        const blurBox = document.createElement('div');
        blurBox.className = 'blur-box';

        // Create heading for the DEMO warning
        const demoHeading = document.createElement('div');
        demoHeading.className = 'demo-heading';
        demoHeading.innerText = 'LIFE OR DEATH WARNING';

        // Create subtext for the DEMO warning
        const demoSubtext = document.createElement('div');
        demoSubtext.className = 'demo-subtext';
        demoSubtext.innerText = 'THIS feed is a movie. None of this is REAL UNTIL YOU READ IT AND MANIFEST THEIR AGENDA. Stand Guard By Your Mind';

        // Create the "View Post" button
        const viewButton = document.createElement('button');
        viewButton.className = 'demo-button';
        viewButton.innerText = 'Expose me to DEATH for 17 seconds.';
        viewButton.disabled = cooldownActive; // Button is initially disabled if cooldown is active

        // Function to handle button click
        viewButton.addEventListener('click', function () {
          if (cooldownActive) return; // If cooldown is active, do nothing

          // Disable all buttons and remove blur from all posts
          disableAllButtons();
          removeBlurFromAllPosts();

          // Set cooldownActive to true to prevent future clicks
          cooldownActive = true;

          // Start the 17-second countdown and exposure
          startExposureCountdown(viewButton);

          // Start the cooldown timer (17 minutes)
          setTimeout(function () {
            startCooldownCountdown();
          }, 17 * 1000); // After the 17-second exposure is over

          console.log(`Button clicked: All posts shown for 17 seconds.`);
        });

        // Log before appending the boxes
        console.log(`Appending AK/VK filter warning to post #${index + 1}`);

        // Append the blur box, heading, subtext, and button to the container
        container.appendChild(blurBox);
        container.appendChild(demoHeading);
        container.appendChild(demoSubtext);
        container.appendChild(viewButton);

        // Append the container to the corner of the post
        post.style.position = 'relative';
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.color = 'white';
        container.style.zIndex = '1000';
        container.style.textAlign = 'center';

        post.appendChild(container);

        // Log after the box has been appended
        console.log(`VK/AK warning appended to post #${index + 1}`);
      }
    });

    if (posts.length === 0) {
      console.log("No posts found. Make sure the selector is correct.");
    }
  } catch (error) {
    console.error("An error occurred in injectDemoBoxes:", error);
  }
}

// Check for new posts every 3 seconds
window.addEventListener('load', function () {
  console.log("Page fully loaded, starting FALSE LIGHT check.");

  setInterval(function () {
    try {
      injectDemoBoxes();
    } catch (error) {
      console.error("An error occurred during interval check:", error);
    }
  }, 3000);
});
