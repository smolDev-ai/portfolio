/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import $ from "jquery"
export const onInitialClientRender = () => {
  $(document).ready(function() {
    console.log("The answer is don't think about it!")
  })
}
