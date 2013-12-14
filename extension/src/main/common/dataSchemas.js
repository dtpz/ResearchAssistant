(function(module){

    /* schema:

        url: {type: 'url', required: true},
        title: {type: 'string'},
        text: {type: 'string', required: true},
        position: {type: 'location', required: true},
        creationDate: {type: 'date'},
        updatedDate: {type: ['date'], required: true},
        isForWholeDomain: {type: 'boolean'},
        isForAllSubPaths: {type: 'boolean'},
        group: {type: 'groupName'} //points to a group? maybe change to an array of labels?
    */
    var Note = {
        url: '',
        title: 'Change this title',
        text: 'Take some notes...',
        position: {x: 0, y:0},
        creationDate: '',
        updatedDate: [],
        _isForWholeDomain: false,
        _isForAllSubPaths: false,
        group: '',
        setUrl: function(url){
            this.url = url || window.location.href;
        },
        setTitle: function(title){
            this.title = title;
        },
        setText: function(text){
            this.text = text;
        },
        setPosition: function(position){
            this.position = position;
        },
        setGroup: function(groupName){
            this.group = groupName;
        },
        setForDomain: function(bool){
            this._isForWholeDomain = bool;
        },
        setForAllSubPaths: function(bool){
            this._isForAllSubPaths = bool;
        }
    }

    /* schema:
     *	groups: {type: ['group'], required: true}
     */
    var NotesList = {
        groups: []
    };

    /* schema:
     * title: {type: 'string', required: true},
     * notes: {type: ['note'], required: true}
     */
    var Group = {
        title: '',
        notes: []
    };

    module.schema = module.schema || {};

    module.schema.Note = Note;
    module.schema.NotesList = NotesList;
    module.schema.Group = Group;

    return module;
})(RA);