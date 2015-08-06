using Distributions
using JSON

mu = -2
s = 3
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

outfile = open("./test/fixtures/typedarray.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
