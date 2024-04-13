import {generateIconIndex} from './generate-icons-index.mjs'

const fn = process.argv[2]

switch (fn) {
    case 'icons':
        generateIconIndex()
        break
}
