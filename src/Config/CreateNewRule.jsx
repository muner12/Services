const createNewRule=[
    {
        feature:'Feature',
        read:"Read",
        rw:'Read/Write'
    },
    {
        feature:'Properties',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Add /Remove /Suspend Property',
        edit:'Edit Property Detail',
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
        check3:<input type="checkbox"/>,
        check4:<input type="checkbox"/>,
    },
    {
        feature:'Contractor',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Add /Remove /Suspend Contractor',
        // edit:'Edit Property Detail'
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
    },

    {
        feature:'Job',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Add /Delete /Jobs',
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
        // edit:'Edit Property Detail'
    },
    {
        feature:'Setting',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Manage admin',
        edit:'Branding',
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
        check3:<input type="checkbox"/>,
        check4:<input type="checkbox"/>,
    },
    {
        feature:'Manager',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Manage admin',
        edit:'Helpdesck',
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
        check3:<input type="checkbox"/>,
        check4:<input type="checkbox"/>,
    },
    ,
    {
        feature:'Reports',
        read:<input type="checkbox"/>,
        rw:<input type="checkbox"/>,
        add:'Subscriptions',
        check1:<input type="checkbox"/>,
        check2:<input type="checkbox"/>,
    },

   
]

export default createNewRule;