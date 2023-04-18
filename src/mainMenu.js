const {
    Menu
} = require('electron')
const template = [
    {
        label: 'File11',
        submenu: [
             {
                role: 'close',
                label: 'File11'
            },
            {
                role: 'close11',
                label: 'File22'
            }  
        ]
    },
    {
        label: 'File22',
        submenu: [
             {
                
                label: 'File22'
            },
            {
                
                label: 'File22'
            }  
        ]
    }
    // {
    //     role: 'help',
    //     submenu: [{
    //         label: 'Learn More',
    //         click: async () => {
    //             const {
    //                 shell
    //             } = require('electron')
    //             await shell.openExternal('https://electronjs.org')
    //         }
    //     }]
    // }
]
const menu = Menu.buildFromTemplate(template)

module.exports = menu