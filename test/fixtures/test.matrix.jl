using Distributions
using JSON

mu = 0
s = 1
d = Logistic( mu,s )

x = linspace( 1, 0, 25 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("mu", mu),
	("s", s),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/matrix.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
