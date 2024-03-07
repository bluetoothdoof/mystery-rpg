function selectRulesTab(name) {
    const tabs = ['test', 'stat', 'condition', 'hitch', 'potential', 'skill', 'combat', 'creation', 'life', 'item'];

    for (const tab of tabs) {
        if (tab === name) {
            document.getElementById(tab).classList.remove('d-none');
        } else {
            document.getElementById(tab).classList.add('d-none');
        }
    }
}