describe('template spec', () => {
  
  it('passes', () => {
    cy.visit("https://stg-account.flightcentre.com.au/")
    cy.screenshot()
    cy.get("#email").type("anything009@nkdnpdlo.mailosaur.net")
    cy.get('button[data-testid="PrimaryButton"]').click() 
    cy.get('.MuiTypography-root.MuiTypography-headingSm.MuiTypography-gutterBottom.css-zk2zf9').should('have.text',"Sign in or create an account")
    cy.mailosaurGetMessage("nkdnpdlo", {
      sentTo: "anything009@nkdnpdlo.mailosaur.net",
      timeout: 60000,
    }).then((email) => {
      cy.log(email.subject);
      var code=email.subject
      console.log("================++++++++++++++++++++++++++++==========="+code)
      const numericCode = code.match(/\d+/); // This regex extracts the first numeric sequence
  
  if (numericCode) {
    const code = numericCode[0]; // Get the first match
    cy.log(`Extracted Code: ${code}`);
    console.log("Oh bale bale code mil geya oye"+code)

    // Step 3: Pass the extracted numeric value to the next page
    // cy.visit('YOUR_NEXT_PAGE_URL'); // Replace with the URL of the next page
    // cy.get('YOUR_INPUT_SELECTOR').type(code); // Replace with the appropriate input selector
    const digits = code.split(''); // No need to trim if there are no spaces

            // Iterate through each digit
            var i=0
            digits.forEach((val, digits) => {
                // Log each digit to the console
                cy.log("-----------Getting digit one by one "+`Digit ${val + 1}: ${val}`);
                if(i==0)
                  {
                    cy.get('input[aria-label="Please enter verification code. Digit 1"]').type(val)
                    cy.wait(2000)
                  }
                 else if(i==1)
                    {
                      cy.get('input[aria-label="Digit 2"]').type(val)
                      cy.wait(2000)
                    }
                    else if(i==2)
                      {
                        cy.get('input[aria-label="Digit 3"]').type(val)
                        cy.wait(2000)
                      }
                        else if (i==3)
                        {
                          cy.get('input[aria-label="Digit 4"]').type(val)
                          cy.wait(2000)
                        }
                    i=i+1
                    cy.wait(5000)
                // Perform assertions or actions with each digit if needed
                // For example:
                // expect(digit).to.match(/[0-9]/); // Check if it's a digit
            });
  } else {
    cy.log('No numeric code found in the subject.');
  }
  cy.get("#mui-1").type("AuStageFirstName")
  cy.get("#mui-2").type("AUStageLastName")
  cy.get("button[type='submit']").click()
    });
  })
})