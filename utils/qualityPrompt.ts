export const qualityPrompt = ({
  userInput,
  landingName,
  landingDescription,
  email,
  callToActionName,
  colors,
  fontFamilies,
  fontWeight,
  landingStyle,
  techStack,

}: {
  userInput: string;
  landingName: string;
  email: string | undefined | null;
  landingDescription: string;
  callToActionName: string;
  colors: string[];
  fontFamilies: string[];
  fontWeight: number;
  landingStyle: string;
  techStack: string;
}) => {
  return `
    I need you to create a landing page:
    - The page is going to be made using ${techStack}.
    - Name should be “${landingName}”, this will be used for the title and the page name. 
    - The description should be exact and with no changes “${landingDescription}”.
    - You should use the fonts “${fontFamilies}” and the style of them to have weights of ${fontWeight}, you can vary a bit on it depending on how big the texts should be.
    - I need exactly ${colors.length} to be used, specifically and only: ${colors.join(", ")}.
    - I want the page to look ${landingStyle} and this should be the aesthetic of the page in general.
    - Make the structure of the files using “${techStack}” as the framework.
    - The call to action button must say “${callToActionName}” and nothing else.
    ${email !== null && email !== undefined && email !== "" && `- Also make a footer (according to the mentioned styles) that contains “${email}” for contact info.`}
    - Take carefully into account this exact specification when building the page: “${userInput}”.

    PLEASE DO NOT RESPOND WITH ANNOTATIONS OR COMMENTS, PROMPT JUST THE CODE AND ONLY THE CODE.

    Example of how you should prompt the code:
    \`\`\`path/to/file.js
    <content of the script>
    \`\`\`
    This is very important as we need the path and file to be specifically that way to create a file tree.

  `
}

export default qualityPrompt;
