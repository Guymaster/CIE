const LinkTool = require('@editorjs/link');
const CodeTool = require('@editorjs/code');
const SimpleImage = require('@editorjs/simple-image');
const EmbedTool = require('@editorjs/embed');
const HeaderTool = require('@editorjs/header');
const TableTool = require('@editorjs/table');
const ListTool = require('@editorjs/list');
const InlineCodeTool = require('@editorjs/inline-code');

const EditorConfigs = {
    tools: {
        header: HeaderTool,
        image: SimpleImage,
        linkTool: LinkTool,
        embed: EmbedTool,
        code: CodeTool,
        table: {
            class: TableTool,
            inlineToolbar: true,
        },
        list: ListTool,
        inlineCode: InlineCodeTool,
    },
    i18n: {
        messages: {
            ui: {
                "blockTunes": {
                  "toggler": {
                    "Click to tune": "cliquer pour régler",
                    "or drag to move": "ou glisser pour déplacer"
                  },
                },
                "inlineToolbar": {
                  "converter": {
                    "Convert to": "Convertir en"
                  }
                },
                "toolbar": {
                  "toolbox": {
                    "Add": "Ajouter"
                  }
                }
            },
            toolNames: {
                "Text": "Texte",
                "Heading": "Titre",
                "List": "Liste",
                "Warning": "Avertissement",
                "Checklist": "Cases à Cocher",
                "Quote": "Quote",
                "Code": "Code",
                "Delimiter": "Délimiteur",
                "Raw HTML": "MTML",
                "Table": "Tableau",
                "Link": "Lien",
                "Marker": "Marker",
                "Bold": "Gras",
                "Italic": "Italique",
                "InlineCode": "Ligne de Code",
            },
            tools: {
                "link": {
                  "Add a link": "Ajouter un Lien"
                },
                "stub": {
                  'The block can not be displayed correctly.': 'Le bloc ne peut pas être affiché correctement'
                }
            },
            blockTunes: {
                "delete": {
                  "Delete": "Supprimer"
                },
                "moveUp": {
                  "Move up": "Faire Monter"
                },
                "moveDown": {
                  "Move down": "Faire Descendre"
                }
              },
        },
    },
};

export default EditorConfigs;