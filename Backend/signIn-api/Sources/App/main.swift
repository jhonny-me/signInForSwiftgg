import Vapor
import VaporMongo
import HTTP
import CorsMiddleware

let drop = Droplet(
	availableMiddleware: ["cors" : CorsMiddleware()],
	preparations: [Post.self],
	 providers: [VaporMongo.Provider.self]
	 )

drop.get { req in
    return try drop.view.make("welcome", [
    	"message": drop.localization[req.lang, "welcome", "title"]
    ])
}

drop.resource("posts", PostController())

drop.run()
