using Distributions
using JSON

mu = 2
s = 5
d = Logistic( mu,s )

x = linspace( -0.2, 0.2, 400 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("mu", mu),
	("s", s),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/array.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
