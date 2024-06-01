export const  formatTime=(timeString)=> {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  export const salaryData=[
    {
        id:1,
        targetDiamond:8000,
        hostSalary:13600
    },
    {
        id:2,
        targetDiamond:15000,
        hostSalary:25500
    },
    {
        id:3,
        targetDiamond:25000,
        hostSalary:42500
    },
    {
        id:4,
        targetDiamond:42000,
        hostSalary:71400
    },
    {
        id:5,
        targetDiamond:60000,
        hostSalary:102000
    },
    {
        id:6,
        targetDiamond:85000,
        hostSalary:145350
    },
    {
        id:7,
        targetDiamond:100000,
        hostSalary:171000
    },
    {
        id:8,
        targetDiamond:150000,
        hostSalary:258000
    },
    {
        id:9,
        targetDiamond:200000,
        hostSalary:344000
    },
    {
        id:10,
        targetDiamond:250000,
        hostSalary:432500
    },
    {
        id:11,
        targetDiamond:300000,
        hostSalary:519000
    },
    {
        id:12,
        targetDiamond:400000,
        hostSalary:692000
    },
    {
        id:13,
        targetDiamond:500000,
        hostSalary:870000
    },
    {
        id:14,
        targetDiamond:700000,
        hostSalary:1225000
    },
    {
        id:15,
        targetDiamond:10000000,
        hostSalary:1770000
    },
    {
        id:16,
        targetDiamond:15000000,
        hostSalary:1770000
    },
    {
        id:17,
        targetDiamond:2200000,
        hostSalary:3894000
    },
    {
        id:18,
        targetDiamond:3000000,
        hostSalary:5310000
    },
    {
        id:19,
        targetDiamond:40000000,
        hostSalary:1770000
    },
    {
        id:20,
        targetDiamond:60000000,
        hostSalary:10620000
    },
    {
        id:21,
        targetDiamond:60000000,
        hostSalary:10620000
    },
    {
        id:22,
        targetDiamond:100000000,
        hostSalary:17800000
    },
    
]



export const globalSalaryData = [
    {
        id: 1,
        targetDiamond: 25000,
        hostSalary: 42500
    },
    {
        id: 2,
        targetDiamond: 42000,
        hostSalary: 71400
    },
    {
        id: 3,
        targetDiamond: 60000,
        hostSalary: 102000
    },
    {
        id: 4,
        targetDiamond: 85000,
        hostSalary: 145350
    },
    {
        id: 5,
        targetDiamond: 100000,
        hostSalary: 171000
    },
    {
        id: 6,
        targetDiamond: 150000,
        hostSalary: 258000
    },
    {
        id: 7,
        targetDiamond: 200000,
        hostSalary: 344000
    },
    {
        id: 8,
        targetDiamond: 250000,
        hostSalary: 432500
    },
    {
        id: 9,
        targetDiamond: 300000,
        hostSalary: 519000
    },
    {
        id: 10,
        targetDiamond: 400000,
        hostSalary: 692000
    },
    {
        id: 11,
        targetDiamond: 500000,
        hostSalary: 870000
    },
    {
        id: 12,
        targetDiamond: 700000,
        hostSalary: 1225000
    },
    {
        id: 13,
        targetDiamond: 1000000,
        hostSalary: 1770000
    },
    {
        id: 14,
        targetDiamond: 1500000,
        hostSalary: 2655000
    },
    {
        id: 15,
        targetDiamond: 2200000,
        hostSalary: 3894000
    },
    {
        id: 16,
        targetDiamond: 3000000,
        hostSalary: 53100000
    },
    {
        id: 17,
        targetDiamond: 4000000,
        hostSalary: 70800000
    },
    {
        id: 18,
        targetDiamond: 6000000,
        hostSalary: 10620000
    },
    {
        id: 19,
        targetDiamond: 10000000,
        hostSalary: 17800000
    }
];
