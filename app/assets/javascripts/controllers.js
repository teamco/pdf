App.controller('HomeController', ['$scope', function($scope) {

}]);

App.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) {
    var section = $routeParams.mainId;

    $scope.section = section;
    $scope.contentTemplateUrl = 'partials/' + section + '.html';
    $scope.sections = {
        compose: {
            order: 0,
            text: 'Compose'
        },
        design: {
            order: 1,
            text: 'Design'
        },
        preview: {
            order: 2,
            text: 'Preview'
        },
        manage: {
            order: 3,
            text: 'Manage'
        }
    };
    $scope.sections[section].cls = 'active';

}]);

App.controller('MainComposeController', ['$scope', function($scope){

    $scope.isInput = function(field) {
        return angular.isObject(field);
    };

    $scope.item = {
        items: {
            info: {
                order: 0,
                multiple: false,
                fields: [{
                    label: 'Full Name',
                    name: 'fullName',
                    type: 'text'
                }],
                items: {
                    addresses: {
                        order: 0,
                        multiple: true,
                        addLabel: 'New address',
                        fields: [{
                            label: 'Address Label',
                            name: 'addressLabel',
                            type: 'text'
                        }, {
                            label: 'Street Address',
                            name: 'streetAddress',
                            type: 'text'
                        }, {
                            label: 'Extended Address',
                            name: 'extendedAddress',
                            type: 'text'
                        }, {
                            label: 'City',
                            name: 'city',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'State',
                            name: 'state',
                            type: 'text'
                        }, {
                            label: 'Zip Code',
                            name: 'zip',
                            type: 'text'
                        }]
                    },
                    phones: {
                        order: 1,
                        multiple: true,
                        addLabel: 'New phone',
                        fields: [{
                            label: 'Phone Type',
                            name: 'phoneType',
                            type: 'text'
                        }, {
                            label: 'Phone Number',
                            name: 'phoneNumber',
                            type: 'text'
                        }]
                    },
                    emails: {
                        order: 2,
                        multiple: true,
                        addLabel: 'New email',
                        fields: [{
                            label: 'Email Label',
                            name: 'emailLabel',
                            type: 'text'
                        }, {
                            label: 'Email Address',
                            name: 'emailAddress',
                            type: 'text'
                        }]
                    }
                }
            },
            objective: {
                order: 1,
                multiple: false,
                fields: [{
                    label: 'Objective',
                    name: 'objective',
                    type: 'text'
                }, {
                    label: 'Objective Statement',
                    name: 'objectiveStatement',
                    type: 'textarea'
                }]
            },
            education: {
                order: 2,
                multiple: false,
                fields: [{
                    label: 'Education',
                    name: 'education',
                    type: 'text'
                }],
                items: {
                    institution: {
                        multiple: true,
                        addLabel: 'New school',
                        fields: [{
                            label: 'Institution',
                            name: 'institution',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'Primary Degree / Field(s) of Study',
                            name: 'primaryDegree',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'Additional Degree / Field(s) of Study',
                            name: 'additionalDegree',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'Start Date',
                            name: 'institutionStartDate',
                            type: 'text',
                            after: '_'
                        }, {
                            label: 'End Date',
                            name: 'institutionEndDate',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'City',
                            name: 'institutionCity',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'State',
                            name: 'institutionState',
                            type: 'text'
                        }],
                        items: {
                            institutionDetails: {
                                multiple: true,
                                addLabel: 'New detail',
                                fields: [{
                                    label: 'Details',
                                    name: 'institutionDetails',
                                    type: 'text'
                                }]
                            }
                        }
                    }
                }
            },
            experience: {
                order: 3,
                multiple: false,
                fields: [{
                    label: 'Experience',
                    name: 'experience',
                    type: 'text'
                }],
                items: {
                    job: {
                        multiple: true,
                        addLabel: 'New job',
                        fields: [{
                            label: 'Start Date',
                            name: 'jobStartDate',
                            type: 'text',
                            after: '_'
                        }, {
                            label: 'End Date',
                            name: 'jobEndDate',
                            type: 'text'
                        }, {
                            label: 'Organization',
                            name: 'jobOrganization',
                            type: 'text'
                        }, {
                            label: 'Title',
                            name: 'jobTitle',
                            type: 'text'
                        }, {
                            label: 'City',
                            name: 'jobCity',
                            type: 'text',
                            after: ','
                        }, {
                            label: 'State',
                            name: 'jobState',
                            type: 'text'
                        }],
                        items: {
                            jobDetails: {
                                multiple: true,
                                addLabel: 'New detail',
                                fields: [{
                                    label: 'Details',
                                    name: 'jobDetails',
                                    type: 'text'
                                }]
                            }
                        }
                    }
                }
            }
        }
    };

}]);