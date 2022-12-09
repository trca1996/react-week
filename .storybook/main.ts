module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    /** Expose public folder to storybook as static */
    staticDirs: ['../public'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            allowSyntheticDefaultImports: false, // speeds up storybook build time
            esModuleInterop: false, // speeds up storybook build time
            shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
            shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
        },
    },
}
