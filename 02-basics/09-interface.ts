interface User {
    readonly dbId:number
    email: string,
    userId: number
    googleId?: string
    startTrail: () => string
    getCoupon(couponname: String): number
}

interface User {
    githubToken?: string
}

const ishwar: User = {
    dbId: 22,
    email: "i@i.com",
    userId: 8080,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (couponname: "ishwar") => {
        return 5
    },
    githubToken:"izwrt"
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const John: Admin = {
    dbId: 22,
    email: "i@i.com",
    userId: 8080,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (couponname: "ishwar") => {
        return 5
    },
    githubToken:"izwrt",
    role: "admin"
}



ishwar.email = "I@Izwr.com"
// ishwar.dbId = 20202;