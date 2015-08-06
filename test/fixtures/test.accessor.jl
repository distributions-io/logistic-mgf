using Distributions
using JSON

mu = -10
s = 8
d = Logistic( mu,s )

x = linspace( .5, -100, 400 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("mu", mu),
	("s", s),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/accessor.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
